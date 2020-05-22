import styled from 'styled-components';
import ImagePicker from 'react-image-picker'

const profilePicture = styled(ImagePicker)`
  width:100%;
  .responsive {
    position:relative;
    margin:0 6px;
    float:left;
    opacity:1;
  }
  .reponsive .thumbnail {
    border:1px solid #ddd;
    border-radius:4px;
    padding:5px;
    width:150px;
    opacity:1;
    margin:0;
  }
  .responsive .thumbnail:hover{
    box-shadow:0 0 2px 1px rgba(0,140,186,.7);
  }
  .responsive .selected{
    background-color:#008cba;
  }
  .responsive:hover{
    cursor:pointer
  }
  .selected{
      opacity:.7;
  }
  .checked{
      display:none;
  }
  .selected .checked{
    display:inline-block;
    transition:.5s ease;
    position:absolute;
    bottom:0;
    right:0;
  }
  .selected .checked .icon{
    background:url(.//images/checkbcd1a436590360ed53ac2f46c76e43e4.png);
    background-size:cover;
    height:75px;
    width:75px;
  }
  .clear{
      clear:both;
  }
`;

export default profilePicture;
