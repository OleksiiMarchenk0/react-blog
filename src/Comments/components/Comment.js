import React from "react";

export default function Comment({ comment }) {
 const { commentText } = comment;
    return (
        <div>
          {commentText}
        </div>
    );
}
