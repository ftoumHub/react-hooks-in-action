// With only four properties in total in our state, we could have set them all explicitly:
//    return {
//        group: action.payload,
//        bookableIndex: 0,
//        hasDetails: state.hasDetails, // Copy across previous values for unchanged properties.
//        bookables: state.bookables //  Copy across previous values for unchanged properties.
//    };
// Using the spread operator protects the code as it evolves; the state may gain new prop-
// erties in the future, and they all need to be copied across.
export default function reducer (state, action) {
    // Specify the action type as the comparison for each case.
    switch (action.type) {

        // Each case block returns a new JavaScript object; the previous state is not mutated.
        // The object spread operator is used to copy across properties from the old state to the
        // new. You then set the property values that need updating on the object, overriding
        // those from the previous state, like this:
        case 'SET_GROUP':
            return {
                ...state, // use the spread operator to copy existing state properties
                group: action.payload, // update the group
                bookableIndex: 0 // and set the bookableIndex to 0
            };

        case 'SET_BOOKABLE':
            return {
                ...state,
                bookableIndex: action.payload
            };

        case 'TOGGLE_HAS_DETAILS':
            return {
                ...state,
                hasDetails: !state.hasDetails
            };

        case 'NEXT_BOOKABLE':
            // eslint-disable-next-line no-case-declarations
            const count = state.bookables // Use the bookables data to count the bookables in the current group.
                .filter(b => b.group === state.group)
                .length;

            return {
                ...state,
                bookableIndex: (state.bookableIndex + 1) % count // Use the modulus operator to wrap from the last index to the first.
            };

        default:
            return state;
    }
}