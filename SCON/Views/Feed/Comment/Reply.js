import React, { useEffect, useState } from 'react'

import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'

import { ViewMore, ReplyIcon } from '../../../Assets/Icons/'
import { TimeRelative } from '../../../Components'
import { CommentModal } from './CommentModal'
export function Reply({ reply }) {
    const [modal, setModal] = useState(false)
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={ReplyIcon} />
                <Image source={{ uri: reply.writer.profilePic }} style={styles.image} />
                <Text>{reply.writer.nick}</Text>
                <Text>
                    {' '}
                    <TimeRelative time={reply.createDate} />{' '}
                </Text>
            </View>
            <Text>{reply.content}</Text>
            <TouchableOpacity onPress={() => setModal(true)}>
                <Image source={ViewMore} />
            </TouchableOpacity>
            <CommentModal modal={modal} setModal={setModal} nick={reply.writer.nick} commentId={reply.replyId} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '10%',
        height: '100%',
        resizeMode: 'contain',
    },
})
