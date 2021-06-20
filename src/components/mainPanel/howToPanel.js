import { Panel } from './howToStyles';

export const HowToPanel = () => {
    return(
        <Panel>
            <div>
                <h2 style={{textAlign: 'center'}}>How To use Pressure Log:</h2>
                <ol>
                    <li>Type in starting temperature and pressures</li>
                    <li>Lock data</li>
                    <li>Manipulate Data</li>
                </ol>
                <ul>
                    <li>You'll lose the difference by Unlocking the data</li>
                    <li>You'll lose all data by Resetting</li>
                    <li>A general rule of thumb is to increase starting pressures by 0.1-0.2PSI for every one-degree increase in track temperature.</li>
                </ul>
            </div>
        </Panel>
    );
}