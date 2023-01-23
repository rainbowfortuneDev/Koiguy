//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import '@openzeppelin/contracts/utils/Counters.sol';

contract KoiGuys is ERC721Enumerable {
    
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    
    string public baseTokenURI;
    address public owner = payable(0x6961626a2285Cb1e34BcdF67bF262510cE583c69);
    uint256 public constant PRICE = 0.08 ether;
    uint256 public constant MAX_PER_MINT = 5;
    uint256 public constant MAX_NFTS = 888;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor(string memory baseURI) ERC721("KoiGuys Tokens", "KOIGUYS") {
        baseTokenURI = baseURI;
    }

    function createToken(uint token_count) public payable {
        require(totalSupply() < MAX_NFTS, "All NFTs have been minted");
        require(token_count <= MAX_PER_MINT, "Amount exceeds NFTs per transaction");
        require(totalSupply() + token_count <= MAX_NFTS, "Mint exceeds max supply");
        require(PRICE * token_count == msg.value, "Amount of ETH is incorrect");
        
        for (uint i = 0; i < token_count; i++){
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _mint(msg.sender, newItemId);
        }
        uint amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }
}