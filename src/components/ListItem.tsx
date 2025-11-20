type ListItemProps = {
    question: string,
    answer: string,
    border : boolean
}

function ListItem(props: ListItemProps) {
    return <li className={`py-2 flex flex-col gap-2 group hover:cursor-pointer ${props.border ? 'border-b pb-4':''} border-b-grayish-blue`}>
        <p className="text-off-white text-lg font-extrabold group-hover:text-soft-orange" >{props.question}</p>
        <p className="text-grayish-blue text-[15px]">{props.answer}</p>
    </li>
}

export default ListItem