import React from 'react'
import reactDom from 'react-dom'
import './Settings.scss'

function Settings({settings, toggleLabels, toggleLabelsSize, resetCamera}) {

  return (
    <>
    <div className="settings">
      <h3>Satellite Labels</h3>
        <div className="settings__options">
          <p
            className="settings__options__toggleLabels"
            onClick={() => toggleLabels()
          }>
            {
              settings.showLabels ? 'Hide Labels' : 'Show Labels'
            }
          </p>
          <p
            onClick={() => toggleLabelsSize()}
            className="settings__options__toggleLabelsSize"
          >Change Size
            <br />
            {
              settings.labelSize === 0 ? ' Small' :
              settings.labelSize === 1 ? ' Medium' :
              settings.labelSize === 2 ? ' Large' : ''
            }
          </p>
          <p className='settings__options__resetCamera' onClick={resetCamera}>
            Reset Camera
          </p>
      </div>
    </div>
    </>
  )
}

export default Settings
