import { Panel, Title, ListContainer, OrderedList, UnorderedList } from './howToStyles';

export const HowToPanel = () => {
    return(
        <Panel>
            <Title>How to use Pressure Log:</Title>
            <ListContainer>
                <OrderedList>
                    <li>Type in starting temperature and pressures</li>
                    <li>Lock data to avoid accidents</li>
                    <li>Click +/- to log changes</li>
                    <li>For a new session, Unlock then Reset</li>
                </OrderedList>
                <UnorderedList>
                    <li>You'll lose the difference by Unlocking the data</li>
                    <li>You'll lose all data by Resetting</li>
                    <li>A general rule of thumb is to increase starting pressures by 0.1-0.2PSI for every one-degree increase in track temperature.</li>
                </UnorderedList>
            </ListContainer>
        </Panel>
    );
}