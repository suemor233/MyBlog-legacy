import React from 'react';
import {Card} from "antd";
import {ArticleProfileWrapper} from "@/components/ArticleProfile/style";
import { Image } from 'antd';
import Icon, {GithubOutlined, TwitterOutlined} from "@ant-design/icons";
export const ArticleProfile: React.FC = () => {


    return (
        <>
            <ArticleProfileWrapper>
                <Card hoverable={true}>
                    <div className='avatar' >
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <Image
                                alt='个人头像'
                                src="https://suemor.oss-cn-beijing.aliyuncs.com/img/89030875.jpeg"
                                width={128}
                                height={128}
                                preview={false}
                            />
                        </div>

                        <p>Suemor</p>
                        <span >所谓自由就是可以说二加二等于四的自由</span>
                        <div className={'iconView'}>
                            <a href="https://github.com/Elmge">
                                <GithubOutlined style={{fontSize:'30px'}}/>
                            </a>
                            <a href="https://twitter.com/Suemor233" style={{color:"#03A4ED"}}>
                                <TwitterOutlined style={{fontSize:'30px'}}/>
                            </a>
                            <a href="mailto:suemor233@outlook.com" >
                              <Image src={'https://suemor.oss-cn-beijing.aliyuncs.com/img/邮箱 (1).png'}preview={false} width={'30px'} />
                            </a>
                        </div>
                    </div>

                </Card>
            </ArticleProfileWrapper>

        </>
    );
}
