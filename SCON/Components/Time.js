import React from 'react';
import { Text, View } from 'react-native';
import validator from 'validator';

export function Time(time) {

	var year = time.time.slice(0, 4)
	var month = time.time.slice(5, 7)
	var day = time.time.slice(8, 10)
	var relativeTime = year + '-' + month + '-' + day

	return (<Text>{relativeTime}</Text>)
}


export function TimeRelative(time) {
	var year = time.time.slice(0, 4)
	var month = time.time.slice(5, 7)
	var day = time.time.slice(8, 10)
	var hour = time.time.slice(11, 13)
	var minute = time.time.slice(14, 16)
	var second = time.time.slice(17, 19)
	var writtenTime = new Date(year, month - 1, day, hour, minute, second)
	var relativeTime = ''
	
	function displayedAt(writtenTime) {
		const milliSeconds = new Date() - writtenTime
		const seconds = milliSeconds / 1000
		if (seconds < 60) return `방금 전`
		const minutes = seconds / 60
		if (minutes < 60) return `${Math.floor(minutes)}분 전`
		const hours = minutes / 60
		if (hours < 24) return `${Math.floor(hours)}시간 전`
		const days = hours / 24
		if (days < 7) return `${Math.floor(days)}일 전`
		const weeks = days / 7
		if (weeks < 5) return `${Math.floor(weeks)}주 전`
		const months = days / 30
		if (months < 12) return `${Math.floor(months)}개월 전`
		const years = days / 365
		return `${Math.floor(years)}년 전`
	}
	relativeTime = displayedAt(writtenTime)
	return (
		<Text>
			{relativeTime}
		</Text>
	)
}

// (1~59초전/1분~59분전/1시간~23시간전/1일~6일전/1주전~3주전/1개월전)


// 2022-07-16T11:42:27.992Z