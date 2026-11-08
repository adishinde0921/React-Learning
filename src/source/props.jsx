function Props(props){
    return(
        <div className="h-20 w-full bg-pink-200 mt-4">
            <h3>
                {props.name}
            </h3>
            <h3>
                {props.age}
            </h3>

        </div>
    )

}
export default Props;