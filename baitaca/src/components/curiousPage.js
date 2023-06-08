import React from "react";
import { Helmet } from "react-helmet";
import { Grid, Page, PageContent, PageHeader, Paragraph } from "grommet";
import { AppHeader } from "./appHeader";
import { Looper } from "./looperCards";

export const CuriousPage = (props) => {
    return (
        <Page background={{"color":"background-back"}}>
            <Helmet> 
                <title>"Curiosidades do Palavragem"</title>
                <link rel="canonical" href={props.canonicalLink} />
            </Helmet>
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

