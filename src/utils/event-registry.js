/**
 * Add an event to the event registry.
 *
 * @param {string}   eventName       The name of the event.
 * @param {Function} eventCallback   The callback to run when the event is fired.
 * @param {Object}   eventScope      The scope to run the event in.
 * @param {boolean}  removeAfterFire Whether or not to remove the event listener after it's fired.
 * @param {number}   weight          The weight of the event.
 * @param {string}   uniqueId        The unique id of the event.
 */
const addEvent = (eventName, eventCallback, eventScope, removeAfterFire, weight, uniqueId) => {
  if (! eventRegistry) {
    return;
  }

  eventRegistry.addEventListener(eventName, eventCallback, eventScope, removeAfterFire, weight, uniqueId);
};

/**
 * Fire an event.
 *
 * @param {string} eventName The name of the event to fire.
 * @param {Object} params    The parameters to pass to the event.
 */
const doEvent = (eventName, params) => {
  if (! eventRegistry) {
    return;
  }

  eventRegistry.doEvent(eventName, params);
};

/**
 * Add something to the event registry.
 *
 * @param {string}   event    The event name.
 * @param {Function} callback The callback to run when the event is fired.
 * @param {boolean}  remove   Whether or not to remove the event listener after it's fired.
 */
const onEvent = (event, callback, remove = false) => {
  if (! eventRegistry) {
    return;
  }

  eventRegistry.addEventListener(event, callback, null, remove);
};

export {
  addEvent,
  doEvent,
  onEvent
};
