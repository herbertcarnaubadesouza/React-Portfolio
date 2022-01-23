import React from "react";
import "./Footer.css";
import { useLanguage } from "../../utilities/languages";

export default function Footer(props) {
  const { t } = useLanguage();
  return (    
      <div className="footer-bottom">
        <p>
          copyright &copy;2022. {t('designed by')} <span>herbert souza</span>
        </p>
      </div>    
  );
}
