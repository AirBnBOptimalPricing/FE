import React from 'react';
import { Divider, List, Item, Segment, Container, Icon} from 'semantic-ui-react';

const Footer = () => {
  return (
    <div>
      <Segment  className ="footer" inverted vertical>
        <Container  textAlign='center'>
          <Divider inverted section />
          <Item as='a' href='https://github.com/AirBnBOptimalPricing'>
            <Icon centered name="github" size='big' alternate outline/>
          </Item>
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  )
};

 export default Footer;