import { Navigate } from "react-router-dom";

import "./history.css";
import "../../global.css";
import { GlobalToolBar } from "../../global";

export default function History(props){
    const displayNum = 10;

    const Menu = () => {
        return (
            <div className = "history-menu">
                <div className = "history-listNumber">#</div>
                <div className = "history-listAccount">Account</div>
                <div className = "history-listOperation">Operation</div>
                <div className = "history-listValue">Value</div>
                <div className = "history-listCost">Gas used (units)</div>
                <div className = "history-listMenuStatus">Status</div>
            </div>
        )
    }

    // const ListElement = (content) => {
    //     // const curRecord = props.recordList[itr];

    //     return (
    //         '<div className = "history-menu">'
    //             + '<div className = "history-listNumber">' + content.id + '</div>'
    //             + '<div className = "history-listAccount">' + content.address + '</div>'
    //             + '<div className = "history-listOperation">' + content.operation + '</div>'
    //             + '<div className = "history-listValue">' + content.value + '</div>'
    //             + '<div className = "history-listCost">' + content.cost + '</div>'
    //             + '<div className = "history-listStatus">'
    //                 + '<img src = {TrashIcon} alt = "delete" width = "30%"/>'
    //             + '</div>'
    //         + '</div>'
    //     )
    // }


    const RecordStatusDisplay = (propsStatus) => {
        const curRecord = propsStatus.record;

        if (curRecord.status === 1){
            return (
                <div className = "history-approved">A</div>
            );
        }
        else{
            if (curRecord.status === 0){
                return (
                    <div className = "history-invalid">I</div>
                );
            }
            else{
                return (
                    <div className = "history-rejected">R</div>
                );
            }
        }
    }

    const RecordDisplay = (propsDisplay) => {
        const curRecord = propsDisplay.record;
        // const recordNum = props.recordLen - curRecord.id;
        return (
            <div className = "history-elementInner">
                <div className = "history-listNumber">{curRecord.id}</div>
                <div className = "history-listAccount">{curRecord.address}</div>
                <div className = "history-listOperation">{curRecord.operation}</div>
                <div className = "history-listValue">{curRecord.value}</div>
                <div className = "history-listCost">{curRecord.cost}</div>
                <div className = "history-listStatus">
                    <RecordStatusDisplay record = {curRecord}/>
                </div>
            </div>
        )
    }

    const ListUnitDisplay = (propsUnit) => {
        const index = propsUnit.index;
        const unitIdx = props.recordLen - displayNum + index;
        return (
            <div className = "history-element">
                {
                    // props.recordLen >= index ?
                    unitIdx >= 1 ?
                    <RecordDisplay record = {props.recordList[unitIdx]}/>:
                    null
                }
            </div>
        )
    }


    // const RecordListRender = () => {
    //     let text = "";
    //     console.log(props.recordLen);
    //     if (props.recordLen > 0){
    //         for (let itr = 1; itr <= props.recordLen; itr ++){
    //             text = text + ListElement(props.recordList[itr]);
    //         }
    //         // text = ListElement(props.recordList[1]);
    //         console.log(text);
    //         // text = '<p>why teh hell</p>';
    //         // console.log(text);
    //         document.getElementById('RecordList').innerHTML = text;
    //     }
    //     // <RecordDisplay record = {props.recordList[0]}/>
        
    // }

    const HistoryPage = () => {
        return (
            <div className = "history-background">
                <div className = "history">
                    <h1>History of Operations</h1>
                    <div className = "history-menuFramework">
                        <hr color = "black" width = "100%"/>
                        <Menu />
                        <hr color = "black" width = "100%"/>
                        
                        <ListUnitDisplay index = {1}/>
                        <ListUnitDisplay index = {2}/>
                        <ListUnitDisplay index = {3}/>
                        <ListUnitDisplay index = {4}/>
                        <ListUnitDisplay index = {5}/>
                        <ListUnitDisplay index = {6}/>
                        <ListUnitDisplay index = {7}/>
                        <ListUnitDisplay index = {8}/>
                        <ListUnitDisplay index = {9}/>
                        <ListUnitDisplay index = {10}/>
                    </div>
                </div>
    
                <GlobalToolBar/>
            </div>
        )
    }

    return (
        <div>
            {
                props.isConnected ?
                <HistoryPage />:
                <Navigate to = '/InterfaceDemo' />
            }
        </div>
    )
}