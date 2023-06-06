import React from "react";
import { Grid, Page, PageContent, PageHeader, Paragraph } from "grommet";
import { AppHeader } from "./appHeader";
import { Looper } from "./looperCards";

export const CuriousPage = (props) => {
    return (
        <Page background={{"color":"background-back"}}>
            <PageContent>
                <AppHeader appName={props.site}/>
            </PageContent>
            <PageContent>
                <PageHeader title={props.title} />
                <Paragraph>{props.explanation}</Paragraph>
                <Grid columns="small" pad="small">
                    {<Looper dataList={props.data}/>}
                </Grid>
            </PageContent>
        </Page>
    )
}

