
const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'> High</h3>
                <h4 className='text-black text-sm'> 20 Feb 2024 </h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold' >Make a Youtube Video </h2>
            <p className='text-sm mt-2'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga molestiae, 
                delectus cumque explicabo molestias?
                </p>
                <div className='mt-2'>
                    <button className='w-full'>Failed</button>
                </div>

        </div>
  )
}

export default FailedTask