/*
** constants and default values for <tag-input>
 */
export const PLACEHOLDER = '+ Tag';
export const SECONDARY_PLACEHOLDER = 'Enter a new tag';
export const KEYDOWN = 'keydown';
export const KEYUP = 'keyup';
export const FOCUS = 'focus';
export const MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
export const ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
export const KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    46: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
export const DRAG_AND_DROP_KEY = 'Text';
export const NEXT = 'NEXT';
export const PREV = 'PREV';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL2NvcmUvY29uc3RhbnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUNuQyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxpQkFBaUIsQ0FBQztBQUN2RCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUM3QixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyx3RUFBd0UsQ0FBQztBQUUxRyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUc7SUFDeEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsR0FBRyxFQUFFLEtBQUs7Q0FDYixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUc7SUFDN0IsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNO0lBQ3RCLEVBQUUsRUFBRSxZQUFZLENBQUMsTUFBTTtJQUN2QixFQUFFLEVBQUUsWUFBWSxDQUFDLFdBQVc7SUFDNUIsRUFBRSxFQUFFLFlBQVksQ0FBQyxXQUFXO0lBQzVCLENBQUMsRUFBRSxZQUFZLENBQUMsR0FBRztDQUN0QixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUM7QUFDM0IsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qKiBjb25zdGFudHMgYW5kIGRlZmF1bHQgdmFsdWVzIGZvciA8dGFnLWlucHV0PlxuICovXG5cbmV4cG9ydCBjb25zdCBQTEFDRUhPTERFUiA9ICcrIFRhZyc7XG5leHBvcnQgY29uc3QgU0VDT05EQVJZX1BMQUNFSE9MREVSID0gJ0VudGVyIGEgbmV3IHRhZyc7XG5leHBvcnQgY29uc3QgS0VZRE9XTiA9ICdrZXlkb3duJztcbmV4cG9ydCBjb25zdCBLRVlVUCA9ICdrZXl1cCc7XG5leHBvcnQgY29uc3QgRk9DVVMgPSAnZm9jdXMnO1xuZXhwb3J0IGNvbnN0IE1BWF9JVEVNU19XQVJOSU5HID0gJ1RoZSBudW1iZXIgb2YgaXRlbXMgc3BlY2lmaWVkIHdhcyBncmVhdGVyIHRoYW4gdGhlIHByb3BlcnR5IG1heC1pdGVtcy4nO1xuXG5leHBvcnQgY29uc3QgQUNUSU9OU19LRVlTID0ge1xuICAgIERFTEVURTogJ0RFTEVURScsXG4gICAgU1dJVENIX1BSRVY6ICdTV0lUQ0hfUFJFVicsXG4gICAgU1dJVENIX05FWFQ6ICdTV0lUQ0hfTkVYVCcsXG4gICAgVEFCOiAnVEFCJ1xufTtcblxuZXhwb3J0IGNvbnN0IEtFWV9QUkVTU19BQ1RJT05TID0ge1xuICAgIDg6IEFDVElPTlNfS0VZUy5ERUxFVEUsXG4gICAgNDY6IEFDVElPTlNfS0VZUy5ERUxFVEUsXG4gICAgMzc6IEFDVElPTlNfS0VZUy5TV0lUQ0hfUFJFVixcbiAgICAzOTogQUNUSU9OU19LRVlTLlNXSVRDSF9ORVhULFxuICAgIDk6IEFDVElPTlNfS0VZUy5UQUJcbn07XG5cbmV4cG9ydCBjb25zdCBEUkFHX0FORF9EUk9QX0tFWSA9ICdUZXh0JztcbmV4cG9ydCBjb25zdCBORVhUID0gJ05FWFQnO1xuZXhwb3J0IGNvbnN0IFBSRVYgPSAnUFJFVic7XG5cbiJdfQ==