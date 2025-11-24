import Card from "./Card";

export default function ImageCard({ imgUrl, ...cardProps }) {
    return (
        <div className="flex flex-col-reverse w-full group mb-10 sm:p-3 sm:flex-row rounded-lg transition duration-75 sm:hover:bg-slate-500/30 sm:hover:translate-y-0.5 sm:hover:shadow-lg sm:hover:shadow-teal-600/30">
            <div className="sm:w-1/4">
                <div className="pr-5 py-2">
                    <img
                        className="w-60 rounded border-2 border-slate-600 sm:group-hover:shadow-md sm:group-hover:shadow-teal-600/40"
                        style={{"background-color":"white"}}
                        src={imgUrl}
                        alt="card_image"
                    />
                </div>
            </div>
            <div className="sm:w-3/4">
                <Card {...cardProps} />
            </div>
        </div>
    );
}
