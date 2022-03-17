import React from 'react';
import {AppFooterWrapper} from "@/components/AppFooter/style";

export const AppFooter: React.FC = () => {
    return (
        <>
            <AppFooterWrapper >
                <span>本博客由react+node驱动&nbsp;&copy;搬运文章请注明出处;</span>
            </AppFooterWrapper>
        </>
    );
}
