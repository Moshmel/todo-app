import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from 'react-reveal/Fade';

export default function Todo({ todo, index, ToggleIsDone, deleteTodo }) {
  return (
    <div className="todo">
        <Fade bottom>

      <p className="todo__text" onClick={() => ToggleIsDone(index)}>
        {todo.text}
      </p>
      <div>
        {todo.isDone && (
          <div style={{ display: "inline-block" }}>
            <LightSpeed bottom>
              <FontAwesomeIcon icon={faCheck} className="check-mark" onClick={() => ToggleIsDone(index)} />
            </LightSpeed>
          </div>
        )}

        <button className="btn-delete" onClick={() => deleteTodo(index)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
        </Fade>
    </div>
  );
}
