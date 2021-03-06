import React from 'react';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={style}>
                <p>
                    <b>Helpline Number : </b> <a href="tel:+911123978046">+91-11-23978046 </a>
                </p>
                <p>
                    <b>Toll Free Number: </b> <a href="tel:1075">1075 </a>
                </p>
            </div>
            <div style={phantom} />
        </div>
    )
}

export default Footer