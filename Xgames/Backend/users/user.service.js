const config = require('configuration.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.pass)) {
        const { pass, ...userWithoutPass } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutPass,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-pass');
}

async function getById(id) {
    return await User.findById(id).select('-pass');
}

async function create(userParam) {

    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" already exists';
    }

    const user = new User(userParam);

    if (userParam.password) {
        user.pass = bcrypt.hashSync(userParam.password, 10);    // hash the password
    }

    await user.save();              //save user to db
}

async function update(id, userParam) {
    const user = await User.findById(id);

    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" already exists';
    }

    if (userParam.password) {
        userParam.pass = bcrypt.hashSync(userParam.password, 10);
    }

    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}