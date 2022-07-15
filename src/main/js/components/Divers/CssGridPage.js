import React from 'react';

import './css-grid-page.scss';

/**
 * Voir l'exemple ici : https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout
 *
 * Autres sites :
 * https://css-tricks.com/snippets/css/complete-guide-grid/
 *
 */
export default function CssGridPage () {
    return (
        <main>
            <div className="parent">
                <div className="one">Un</div>
                <div className="two">Deux</div>
                <div className="three">Trois</div>
                <div className="four">Quatre</div>
                <div className="five">Cinq</div>
                <div className="six">Six</div>
            </div>
        </main>
    );
}