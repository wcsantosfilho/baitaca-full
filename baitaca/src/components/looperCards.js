import React from "react";
import { Card, CardHeader, CardBody, Text } from "grommet";

export const Looper = ({ dataList }) => {
    return (
        <>
            {dataList.map((item) => (
                <div key={item}>
                    <Card pad="small">
                        <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
                            <Text size="medium">
                                {item.letter}
                            </Text>
                        </CardHeader>
                        <CardBody pad="small">
                            <Text size="auto" weight="bold" color="brand" textAlign="center">
                                {item.word}
                            </Text>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </>
    );
}
