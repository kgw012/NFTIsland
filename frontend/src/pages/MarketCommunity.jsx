import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Avatar, Stack, Typography, Grid } from '@mui/material';
import Page from '../components/Page';
import logo from '../image/logo.png';
import ItemCard from '../layouts/market/ItemCard';
import { getSalesItem } from '../api/market';
import { getBoardsAPI } from '../api/board';
import { createSaleContract } from '../web3Config';

function MarketCommunity() {
	const { communityId } = useParams();
	const theme = useTheme();

	const [communityInfo, setCommunityInfo] = useState({});
	const [itemList, setItemList] = useState([]);

	useEffect(async () => {
		getBoardsAPI(communityId).then(({ data }) => {
			setCommunityInfo({
				name: data.name,
				hostNickname: data.host_nick_name,
			});
		});
		// 판매중인 nft 목록불러오기
		const { data } = await getSalesItem(communityId);

		data.map(async v => {
			const saleContract = createSaleContract(v.sale_contract_address);
			const saleInfo = await saleContract.methods.getSaleInfo().call();

			setItemList(prev => [
				...prev,
				{
					price: saleInfo[0],
					tokenId: saleInfo[1],
					nftAddress: saleInfo[2],
					communityName: v.community_name,
					name: v.item_name,
					imageUrl: v.item_url,
					saleCA: v.sale_contract_address,
				},
			]);
		});
	}, []);
	const onClickNickname = () => {
		console.log(itemList);
		console.log('nickname');
	};

	return (
		<Page>
			<Container>
				<Stack direction='column' alignItems='center' marginTop='50px'>
					<Box border='3px solid white' borderRadius='50%' paddingBottom='7px'>
						<Avatar sx={{ width: 200, height: 200 }} src={logo} alt='' />
					</Box>
					{/* 커뮤니티 이름 */}
					<Typography variant='h2'>{communityInfo.name}</Typography>
					<Stack direction='row'>
						<Typography variant='subtitle3' paddingRight='7px'>
							by
						</Typography>
						<Typography
							variant='subtitle1'
							color={theme.palette.info.dark}
							onClick={onClickNickname}
							sx={{ cursor: 'pointer' }}
						>
							{communityInfo.hostNickname}
						</Typography>
					</Stack>
					{/* 커뮤니티 아이템 정보 박스 */}
					<Stack
						direction='row'
						border={`1px solid ${theme.palette.grey[400]}`}
						borderRadius='10px'
						maxWidth='600px'
						height='90px'
						width='90%'
						margin='50px 0'
						justifyContent='space-around'
						textAlign='center'
					>
						{/* items */}
						<Box width='100%' borderRight={`1px solid ${theme.palette.grey[400]}`}>
							<Typography variant='h4' margin='15px 0 5px'>
								10.0K
							</Typography>
							<Typography color={theme.palette.grey[600]}>items</Typography>
						</Box>
						{/* owners */}
						<Box width='100%' borderRight={`1px solid ${theme.palette.grey[400]}`}>
							<Typography variant='h4' margin='15px 0 5px'>
								4.7K
							</Typography>
							<Typography color={theme.palette.grey[600]}>owners</Typography>
						</Box>
						{/* volume traded */}
						<Box width='100%'>
							<Typography variant='h4' margin='15px 0 5px'>
								2.1K
							</Typography>
							<Typography color={theme.palette.grey[600]}>volume traded</Typography>
						</Box>
					</Stack>
				</Stack>

				{/* NFT List */}
				<Grid container spacing={6}>
					{itemList.map(item => (
						<Grid sx={{ mb: 5 }} item xs={12} sm={6} md={4} lg={3} key={item.tokenId}>
							<ItemCard
								communityName={item.communityName}
								itemName={item.name}
								price={item.price}
								saleCA={item.saleCA}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</Page>
	);
}

export default MarketCommunity;
