import { Panel } from './howToStyles';

export const HowToPanel = () => {
    return(
        <Panel>
            <div>
                <h2 style={{textAlign: 'center'}}>How To use:</h2>
                <ol>
                    <li>Type in starting temperature and pressures</li>
                    <li>Lock data</li>
                    <li>Manipulate Data</li>
                </ol>
                <ul>
                    <li>You'll lose the difference by Unlocking the data</li>
                    <li>You'll lose all data by Resetting</li>
                </ul>
            </div>
        </Panel>
    );
}