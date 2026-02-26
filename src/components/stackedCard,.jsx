import { motion } from "framer-motion"

const StackedCard = ({items, setItems, CardContent}) => {

    const handleSwipe = () => {
        setItems((prev) => {
            const newArr = [...prev]
            const first = newArr.shift()
            newArr.push(first)
            return newArr
        })
    }

    return(
        <>
            {items.map((card, index) => (
                <motion.div
                    key={index}
                    drag={index === 0 ? "x" : false}       
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}                          
                    onDragEnd={(e, info) => {
                        if (index === 0 && Math.abs(info.offset.x) > 100) {
                        handleSwipe();
                        }
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{
                        scale: 1 - index * 0.05,
                        x: index === 0 ? 0 : index * 15,
                        opacity: 1,
                        zIndex: 10 - index
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex justify-center flex-col absolute top-0 left-0 w-full h-full bg-black border border-white rounded-xl shadow-x cursor-grab p-2"
                >
                    {CardContent(card)}
                </motion.div>
            ))}
        </>
    )
}

export default StackedCard
