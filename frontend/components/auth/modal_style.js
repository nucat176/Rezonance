const ModalStyle = {
  overlay : {
    position        : 'fixed',
    display         : 'flex',
    justifyContent  : 'center',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0)',
  },
  content : {
    position        : 'absolute',
    top             : '150px',
    width           : '500px',
    height          : '400px',
    border          : '1px solid #ccc',
    backgroundColor : 'rgba(0, 0, 0, .75)'
  }
};

export default ModalStyle;
