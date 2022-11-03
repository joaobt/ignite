import React from "react";

export function Post(props) {
  return (
    <div>
      <strong>
        {props.author}
        <a> {props.content}</a>
      </strong>
    </div>
  );
}
