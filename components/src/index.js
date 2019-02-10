import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
          <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Tomorrow at 13:13"
                commentText="Nice work, dude!"
                avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
                author="Paul Fisher"
                timeAgo="Today at 12:00"
                commentText="This is still a shitpost..."
                avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
                author="Gvido"
                timeAgo="Yeaterday at 14:50"
                commentText="You can do it better."
                avatar={faker.image.avatar()}
            />
          </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));