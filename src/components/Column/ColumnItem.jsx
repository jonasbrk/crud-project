import react, { useEffect, useRef, useState, useContext } from "react";
import { useDrag, useDrop } from 'react-dnd'
import columnContext from './context'
import "./ColumnItem.styles.css"
import MenuButton from "../MenuButton/MenuButton";
import Modal from "../Modal/Modal";
import InputTxt from "../InputTxt/InputTxt";

import { Edit, Close, Trash, Options, Plus, Activity, Automation, Filter, Help, Integrate, Notification, People, Settings, Share, Tools } from '../../assets/svg'

const ColumnItem = (props) => {

    const { move } = useContext(columnContext)
    const ref = useRef()

    const [{ isDragging }, dragRef] = useDrag({


        type: 'CARD',
        item: () => ({
            id: props.id,
            index: props.index,
            listIndex: props.listIndex
        }),
        collect: monitor => ({

            isDragging: monitor.isDragging(),
        }),

    });

    const [_, dropRef] = useDrop({

        accept: 'CARD',
        hover(item, monitor) {

            const draggedListIndex = item.listIndex;
            const targetListIndex = props.listIndex;

            const draggedIndex = item.index
            const targetIndex = props.index

            if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) return

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) return
            if (draggedIndex > targetIndex && draggedTop > targetCenter) return

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex)

            item.index = targetIndex
            item.listIndex = targetListIndex
        }
    })


    const GetItemInfo = () => {

        props.setInputTitle(props.title)
        props.setInputContent(props.content)
        props.setInputId(props.id)
    }

    dragRef(dropRef(ref));
    return (
        <>
            <div className={`columnItem ${isDragging ? 'columnItem--dragging' : ""}`} ref={ref}>
                <div className="columnItem__header">
                    <div className="columnItem__section__1">
                        <span>fruta</span>
                        <div className="columnItem__buttons__wrapper">
                            <MenuButton onClick={() => {
                                props.setOpenItemModal(true)
                                GetItemInfo()
                            }} src={<Edit />} />
                            <MenuButton onClick={() => props.HandleItemWraperDeletion(props.id)} src={<Trash />} />
                        </div>
                    </div>
                    <div className="columnItem__section__2">
                        <h3>

                            {props.title}
                        </h3>
                    </div>
                </div>

                <p>
                    {props.content}
                </p>

            </div>

        </>
    )
}

export default ColumnItem