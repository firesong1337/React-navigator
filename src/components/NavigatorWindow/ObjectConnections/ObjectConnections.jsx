import "./ObjectConnections.css";

/**
 * + нормально сверстан
 *
 * - плохая расширяемость
 * - знает больше нужного
 */
export const ObjectConnections = ({
  users,
  groups,
  meetings,
  connectedObjects,
  onDisplayChange,
}) => {
  // wrapper это хорошо
  const handleConnectionClick = (type, value) => {
    // выносимая бизнес-логика
    // eslint-disable-next-line default-case
    switch (type) {
      case "users":
        type = users;
        break;
      case "groups":
        type = groups;
        break;
      case "meetings":
        type = meetings;
        break;
    }
    onDisplayChange(type, value);
  };

  return (
    <>
      <h3>Connected Objects</h3>

      <div className="connected-objects">
        {connectedObjects.map(
          (obj, index) =>
            obj.value.length !== 0 && (
              <div
                key={index}
                onClick={() => handleConnectionClick(obj.name, obj.value)}
                className="secondary connected-item"
                role="button"
              >
                <span>{obj.name}</span>
                <div className="connected-item-length">{obj.value.length}</div>
              </div>
            )
        )}
      </div>
    </>
  );
};
