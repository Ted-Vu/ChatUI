import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Ted"
          timeAgo="Today at 6:00PM"
          comment="React is awesome"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kevin"
          timeAgo="Today at 5:00PM"
          comment="Vue is awesome"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mia"
          timeAgo="Today at 6:00PM"
          comment="Angular is awesome"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
