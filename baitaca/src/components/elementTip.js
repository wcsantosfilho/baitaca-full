import React from 'react';
import {
  Button,
  Box,
  Text,
  Tip
} from 'grommet';

import { HelpOption } from 'grommet-icons';

export const ElementTip = (props) => {
    return (
        <Tip plain
        content={
          <Box
            pad="small"
            gap="small"
            width={{ max: 'small' }}
            round="small"
            background="background-front"
            responsive={false}
          >
            <Text size="small">
              {props.text}
            </Text>
          </Box>
        }
        dropProps={{ align: { left: 'right' } }}
        >
          <Button icon={<HelpOption size="small" />} />
        </Tip>
    );
  };
