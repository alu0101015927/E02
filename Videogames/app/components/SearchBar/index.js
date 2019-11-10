import React from 'react';
import PropTypes from 'prop-types';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

// import FaClose from 'react-icons/fa/close';
import { FaClose } from 'react-icons-kit/fa/close';
import { FaSearch } from 'react-icons-kit/fa/search';
// import FaSearch from '../../../node_modules/react-icons/fa/index.js';

export default class SearchBar extends React.PureComponent {
  static propTypes = {
    autoFocus: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    defaultValue: PropTypes.string,
    defaultminCharsValue: PropTypes.number, // default minimum length of to_search string
    isDynamic: PropTypes.bool,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
  };

  static defaultProps = {
    autoFocus: false,
    id: '',
    className: '',
    defaultValue: '',
    defaultminCharsValue: 4,
    onSearch: () => {},
    onClear: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: props.defaultValue,
    };
  }

  onClearClick = () => {
    const { onClear, defaultValue } = this.props;
    this.setState({ searchKeyword: defaultValue });
    this.onSearch(defaultValue);
    onClear();
  };

  onSearch = searchKeyword => {
    const onlyNum = /^[a-zA-Z]$/.test(searchKeyword);
    const { onSearch, defaultminCharsValue } = this.props;
    if (searchKeyword.length >= defaultminCharsValue && onlyNum === true) {
      onSearch(searchKeyword);
    }
  };

  onChange = event => {
    const { isDynamic, defaultValue } = this.props;
    const searchKeyword = event.target.value || defaultValue;
    this.setState({ searchKeyword });
    if (isDynamic) {
      this.onSearch(searchKeyword);
    }
  };

  onSearchClick = () => {
    this.onSearch(this.state.searchKeyword);
  };

  onKeyDown = event => {
    if (
      event.keyCode &&
      (event.keyCode === 13 ||
        event.which === 13 ||
        event.keyCode === 32 ||
        event.which === 32)
    ) {
      this.onSearch(this.state.searchKeyword);
    }
  };

  getButton = () => {
    const { id, isDynamic, defaultminCharsValue } = this.props;
    const { searchKeyword } = this.state;
    const onlyNum = /^[a-zA-Z]$/.test(searchKeyword);
    const bsClass = ['button'];
    let icon = <FaSearch />;
    let onClick = this.onSearchClick;
    let isDisabled = true;
    if (searchKeyword.length >= defaultminCharsValue && onlyNum === true) {
      isDisabled = false;
    }
    if (isDynamic) {
      bsClass.push('dynamic-search');
    }
    if (searchKeyword && isDynamic) {
      bsClass.push('btn-close');
      icon = <FaClose />;
      onClick = this.onClearClick;
      isDisabled = false;
    }
    return (
      <Button
        id={`${id}-button`}
        bsClass={bsClass.join(' ')}
        onClick={onClick}
        disabled={isDisabled}
      >
        {icon}
      </Button>
    );
  };

  // getTooltip = tooltip => <Tooltip id="tooltip">{tooltip}</Tooltip>;

  renderSearchBar = () => {
    const { autoFocus, id, inputClassName, isDynamic } = this.props;
    const { searchKeyword } = this.state;
    return (
      <InputGroup>
        <FormControl
          autoFocus={autoFocus}
          id={`${id}-input`}
          type={isDynamic ? 'text' : 'search'}
          className={inputClassName}
          onChange={this.onChange}
          onKeyDown={isDynamic ? () => {} : this.onKeyDown}
          placeholder={this.defaultValue}
          value={searchKeyword}
        />
        <InputGroup.Button>{this.getButton()}</InputGroup.Button>
      </InputGroup>
    );
  };

  render() {
    const { id, className } = this.props;
    return (
      <div id={`${id}-container`} className={className}>
        {this.renderSearchBar()}
      </div>
    );
  }
}

/* import React, { Component } from 'react';

// import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // this.handleInputChange = this.handleInputChange.bind(this);
  } 

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <div className="white-text material-icons prefix">
        <i className="input-field red-text" />
        <input
          type="text"
          aria-label="Buscador"
          placeholder="Buscar.."
          className="autocomplete white-text"
          onchangeText={this.updateSearch}
          value={search}
        />
      </div>
    );
  }
}

export default SearchBar;
*/
