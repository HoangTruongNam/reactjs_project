<<<<<<< HEAD
import React from 'react';
import '../asset/scripts/i18n'
import { useTranslation } from 'react-i18next';
import '../asset/css/Toggle.css';

function Toggle({ toggled, onToggle }) {
  const {t} = useTranslation();
  return (
    <div>
      <div className="mb-2 font-bold">{t('free-ship')}</div>
      <div className="flex ">
      <div className="max-w-52 mr-2">{t('fs-qote')}</div>
        <button className={`toggle-btn ${toggled ? 'toggled' : ""}`} onClick={onToggle}>
          <div className="thumb"></div>
        </button>
      </div>
=======
import React, { useState } from 'react';
import '../asset/css/Toggle.css'
function Toggle() {
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <button className={`toggle-btn ${toggled ? 'toggled' :"" }`} onClick={() => setToggled(!toggled)}>
        <div className="thumb"></div>
      </button>
>>>>>>> main
    </div>
  );
}

export default Toggle;
