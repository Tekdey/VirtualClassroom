import React from "react";
import AdminContainer from "../component/chat/AdminContainer";
import AdminWebCam from "../component/chat/AdminWebCam";
import ChatInput from "../component/chat/ChatInput";
import ChatContainer from "../component/chat/Container";
import CourseTitle from "../component/chat/CourseTitle";
import Message from "../component/chat/Message";
import StudentWebCam from "../component/chat/StudentWebCam";
import TeacherLiveShare from "../component/chat/TeacherLiveShare";

const Classroom = () => {
  return (
    <>
      <p className="md:hidden block">
        La salle de classe n'est pas accessible depuis un petit écran pour le
        moment ...
      </p>
      <main className="w-full h-full hidden md:flex">
        <div className="flex flex-col w-full h-full">
          <AdminContainer>
            <AdminWebCam />
            <AdminWebCam />
          </AdminContainer>
          <TeacherLiveShare />
          <CourseTitle />
        </div>

        <ChatContainer>
          <StudentWebCam />
          <div className="overflow-y-auto flex flex-col-reverse gap-1 h-full">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          <ChatInput />
        </ChatContainer>
      </main>
    </>
  );
};

export default Classroom;
