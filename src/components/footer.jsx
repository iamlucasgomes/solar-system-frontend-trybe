import React from 'react';

class Footer extends React.Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();

    return (
      <div className="footer">
        <p>{'LUCAS GOMES © '.concat(year)}</p>
        <p>Desenvolvedor Web Full Stack</p>
        <p>
          Projeto desenvolvido no bloco de Front End na
          {' '}
          <span id="trybe">Trybe</span>
        </p>
      </div>
    );
  }
}

export default Footer;
