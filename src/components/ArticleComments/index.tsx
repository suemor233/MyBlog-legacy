import React, {memo, useCallback, useState} from 'react';
import TextArea from "antd/lib/input/TextArea";
import CommentEmojiCpn from "@/components/CommentEmojiCpn";
import {Button} from "antd";

export const ArticleComments: React.FC = memo(() => {
    const [content, setContent] = useState("")
    // emoji选择
    const onEmojiClick = useCallback((event: any, emojiObject: any) => {
        setContent(content + emojiObject.emoji)
    },[content])
    return (
        <>

            <p>共&nbsp;0&nbsp;条评论</p>
            <TextArea
                value={content}
                placeholder='你想对我说什么？'
                rows={5}
                showCount
                maxLength={200}
                onChange={e => setContent(e.target.value)}
            />

            <div className="emoji-container">
                <CommentEmojiCpn onEmojiClick={onEmojiClick} />
            </div>
            <Button className='mt-15 publish-btn' type="primary" onClick={()=>{console.log(content)}}>发表</Button>
        </>
    );
})
