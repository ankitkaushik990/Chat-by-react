//--->> the code below is just to change the uI of the application by using another library called react-caht-engine-pretty

// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     "d684638a-03f7-4922-91ff-41a6700c2549",
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
//     </div>
//   );
// };

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="
    d684638a-03f7-4922-91ff-41a6700c2549"
        username={props.user.username}
        secret={props.user.username}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
