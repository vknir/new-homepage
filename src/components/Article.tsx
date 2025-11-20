type ArticleProps = {
    title: string,
    description: string,
    image: string,
    articleNumber: string
}

function Article(props: ArticleProps) {
    return <div className="flex gap-5 lg:gap-3 ">
        <img className="h-30" src={props.image} alt={props.title + " image"} />
        <div className="flex h-30 flex-col justify-between gap-1 group hover:cursor-pointer">
            <h3 className="text-soft-red text-2xl font-extrabold">{props.articleNumber}</h3>
            <p className="text-[15px] text-very-dark-blue font-extrabold group-hover:cursor-pointer group-hover:text-soft-red ">{props.title}</p>
            <p className="text-grayish-blue text-[15px]">{props.description}</p>
        </div>
    </div>
}

export default Article;