type ListItemProps = {
    question: string,
    answer: string,
    border : boolean
}

function ListItem(props: ListItemProps) {
    return <li className={`py-2 flex flex-col gap-2 ${props.border ? 'border-b pb-8':''} border-b-grayish-blue`}>
        <p className="text-off-white text-lg font-medium " >{props.question}</p>
        <p className="text-grayish-blue text-[15px]">{props.answer}</p>
    </li>
}

export default ListItem