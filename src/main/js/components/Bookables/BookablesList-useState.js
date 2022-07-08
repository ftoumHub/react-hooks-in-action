import React, {useState, Fragment} from 'react';

// Use object destructuring to assign the bookables data to a local variable.
import {bookables, sessions, days} from '../../static.json';
import {FaArrowRight} from 'react-icons/fa';

/**
 * How does React know when to call the function and update the UI?
 * Just because you change the value of a variable within your component
 * function doesn’t mean React will notice. If you want to get noticed,
 * you can’t just say “Hello, World!” to people in your head; you have to say it out loud.
 */
export default function BookablesList() {
    console.log('==========> BookablesList() <==========');

    // Calling useState returns a value and its updater function in an array with two elements
    const [group, setGroup] = useState('Kit');
    const [bookableIndex, setBookableIndex] = useState(0);
    const groups = [...new Set(bookables.map(b => b.group))];

    console.log('=> bookable.groups');
    console.log(groups);

    /**let bookableIndex = 1;
     const changeBookable = (selectedIndex) => {
        bookableIndex = selectedIndex;
        console.log(selectedIndex);
    };*/

    const bookablesInGroup = bookables.filter(b => b.group === group); // filter the bookables to just those in the group
    const bookable = bookablesInGroup[bookableIndex];

    console.log('=> bookable.days');
    console.log(bookable.days);
    console.log('=> bookable.sessions');
    console.log(bookable.sessions);
    const [hasDetails, setHasDetails] = useState(false);

    function changeGroup (event) {
        setGroup(event.target.value);
        setBookableIndex(0);
    }

    function nextBookable() {
        setBookableIndex((bookableIndex + 1) % bookablesInGroup.length);
    }

    return (
        <Fragment>
            <div>
                <select value={group} onChange={changeGroup}>
                    {groups.map(g => <option value={g} key={g}>{g}</option>)}
                </select>
                <ul className="bookables items-list-nav">
                    {bookablesInGroup.map((b, i) => (
                        <li key={b.id} className={i === bookableIndex ? 'selected' : null}>
                            <button className="btn" onClick={() => setBookableIndex(i)}>
                                {b.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <p>
                    <button className="btn" onClick={nextBookable} autoFocus>
                        <FaArrowRight/>
                        <span>Next</span>
                    </button>
                </p>
            </div>

            {bookable && (
                <div className="bookable-details">
                    <div className="item">
                        <div className="item-header">
                            <h2>{bookable.title}</h2>
                            <span className="controls">
                                <label>
                                  <input type="checkbox" checked={hasDetails} onChange={() => setHasDetails(has => !has)}/>
                                  Show Details
                                </label>
                            </span>
                        </div>

                        <p>{bookable.notes}</p>

                        {hasDetails && (
                            <div className="item-details">
                                <h3>Availability</h3>
                                <div className="bookable-availability">
                                    <ul>
                                        {bookable?.days?.sort().map(d => <li key={d}>{days[d]}</li>)}
                                    </ul>
                                    <ul>
                                        {bookable?.sessions?.map(s => <li key={s}>{sessions[s]}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Fragment>
    );
}