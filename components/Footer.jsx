import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>LastFish</strong> by{" "}
          <a href="https://jgthms.com">Jonathan González Benavides</a>. The
          source code is licensed{" "}
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Data
          extracted from{" "}
          <a href="https://www.fishwatch.gov/developers">FishWatch API</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
