import React, {ReactElement} from 'react';
import {Card} from "antd";
import {ArticleProfileWrapper} from "@/components/ArticleProfile/style";
import { Image } from 'antd';
import Icon, {GithubOutlined, TwitterOutlined} from "@ant-design/icons";

interface IProps {
    username:string,
    github:string,
    email:string,
    twitter:string,
    introduce:string,
    avatar:string
}

export const ArticleProfile: React.FC<IProps> = ({username,github,email,twitter,introduce,avatar}):ReactElement => {
    return (
        <>
            <ArticleProfileWrapper>
                <Card hoverable={true}>
                    <div className='avatar' >
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <Image
                                alt='个人头像'
                                src={avatar}
                                width={128}
                                height={128}
                                preview={false}
                            />
                        </div>

                        <p>{username}</p>
                        <span >{introduce}</span>
                        <div className={'iconView'}>
                            <a href={github}>
                                <GithubOutlined style={{fontSize:'30px'}}/>
                            </a>
                            <a href={twitter} style={{color:"#03A4ED"}}>
                                <TwitterOutlined style={{fontSize:'30px'}}/>
                            </a>
                            <a href={'mailto:'+email} >
                              <Image src={'https://suemor.oss-cn-beijing.aliyuncs.com/img/邮箱 (1).png'}preview={false} width={'30px'} />
                            </a>
                        </div>
                    </div>

                </Card>
            </ArticleProfileWrapper>

        </>
    );
}
