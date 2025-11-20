import Article from "./Article";
import Gaming from '../assets/images/image-gaming-growth.jpg'
import Laptop from '../assets/images/image-top-laptops.jpg'
import Retro from '../assets/images/image-retro-pcs.jpg'

function ArticleContainer() {
    return <div className="flex flex-col gap-6 mt-12 lg:flex-row lg:justify-between ">
        <Article image={Retro} articleNumber="01" title="Reviving Retro PCs" description="What happens when old PCs are given modern upgrades." />
        <Article image={Laptop} articleNumber="02" title="Top 10 Laptops of 2022" description="Our best picks for various needs and budgets." />
        <Article image={Gaming} articleNumber="03" title="The Growth of Gaming" description="How the pandemic has sparked new opportunities." />
    </div>
}

export default ArticleContainer;