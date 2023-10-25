// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol";
import "./Ownable.sol";
import "./ERC2771Recipient.sol";

contract MyERC20GasLess is ERC20, Ownable, ERC2771Recipient {

    uint8 decimalValue;
    
    constructor(uint256 initialSupply, uint8 _decimalValue, string memory name, string memory symbol, address premint_address, address forwarder) ERC20(name, symbol) {
        decimalValue = _decimalValue;
       initialSupply = initialSupply * 10**_decimalValue;
        _setTrustedForwarder(forwarder);
        _mint(premint_address, initialSupply);
    }

       function _msgSender() internal view override(Context, ERC2771Recipient)
      returns (address sender) {
      sender = ERC2771Recipient._msgSender();
    }

    function _msgData() internal view override(Context, ERC2771Recipient)
        returns (bytes calldata) {
        return ERC2771Recipient._msgData();
    }


    function decimals() public view virtual override returns (uint8) {
        return decimalValue;
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }
}
