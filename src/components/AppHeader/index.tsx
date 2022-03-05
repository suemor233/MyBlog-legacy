import React from 'react';
import {AppHeaderWrapper,AppHeaderCenterWrapper} from './style'
import {Card} from "antd";
import routes from "@/router";
import {useRouter} from "next/router";

export const AppHeader: React.FC = (props:any) => {
    const router = useRouter()
    return (
        <AppHeaderWrapper>

                <AppHeaderCenterWrapper>
                    <Card bordered={true} hoverable={true} className={'card'}>
                            {
                                routes.map((item, index) => {
                                    return (
                                        <div onClick={() => router.push(item.path)} key={index} className='nav-item'>
                                            <span>{item.name}</span>
                                        </div>
                                    )
                                })
                            }
                    </Card>
                </AppHeaderCenterWrapper>
        </AppHeaderWrapper>
    );
}
