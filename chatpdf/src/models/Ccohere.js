import { ChatCohere } from '@langchain/cohere'

/**
 * Creates a new instance of ChatCohere with the 'command-r-plus' model.
 *
 * @param {Object} [parms={}] - Parameters for the ChatCohere instance.
 * @returns {ChatCohere} - A new instance of ChatCohere.
 */
export function CcommandRP(parms = {}) {
  const model = new ChatCohere({
    model: 'command-r-plus',
    temperature: 0.5,
    ...parms,
  })
  return model
}

// const llm = CcommandRP()
// const res = await llm.invoke('hi there')
// console.log(res.content)
// console.log(res.additional_kwargs.chatHistory)
