type ArticleProps = {
    title: string,
    description: string,
    image: string,
    articleNumber: string
}

function Article(props: ArticleProps) {
    return <div className="flex gap-5">
        <img className="h-30" src={props.image} alt={props.title + " image"} />
        <div className="flex h-30 flex-col justify-between gap-1">
            <h3 className="text-soft-orange text-2xl font-extrabold">{props.articleNumber}</h3>
            <p className="text-[15px] text-very-dark-blue font-extrabold">{props.title}</p>
            <p className="text-grayish-blue text-[15px]">{props.description}</p>
        </div>
    </div>
}

export default Article;