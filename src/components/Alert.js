import React, {useContext} from 'react';

const Alert = () => {

    if (!alert) {
        return null;
    }

    return (
        <div class={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Внимание!</strong> 
            {alert.text}
            <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
    );
}

export default Alert;