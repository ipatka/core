/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface AccountRegistryLogicContract
  extends Truffle.Contract<AccountRegistryLogicInstance> {
  "new"(
    _initializer: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<AccountRegistryLogicInstance>;
}

export interface AccreditationRepoContract
  extends Truffle.Contract<AccreditationRepoInstance> {
  "new"(
    _admin: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<AccreditationRepoInstance>;
}

export interface AirdropProxyContract
  extends Truffle.Contract<AirdropProxyInstance> {
  "new"(
    _token: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<AirdropProxyInstance>;
}

export interface AttestationLogicContract
  extends Truffle.Contract<AttestationLogicInstance> {
  "new"(
    _initializer: string | BigNumber,
    _tokenEscrowMarketplace: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<AttestationLogicInstance>;
}

export interface BasicTokenContract
  extends Truffle.Contract<BasicTokenInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<BasicTokenInstance>;
}

export interface BatchInitializerContract
  extends Truffle.Contract<BatchInitializerInstance> {
  "new"(
    _attestationLogic: string | BigNumber,
    _registryLogic: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<BatchInitializerInstance>;
}

export interface ConvertLibContract
  extends Truffle.Contract<ConvertLibInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ConvertLibInstance>;
}

export interface ECRecoveryContract
  extends Truffle.Contract<ECRecoveryInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ECRecoveryInstance>;
}

export interface ERC20Contract extends Truffle.Contract<ERC20Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC20Instance>;
}

export interface ERC20BasicContract
  extends Truffle.Contract<ERC20BasicInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC20BasicInstance>;
}

export interface HasNoEtherContract
  extends Truffle.Contract<HasNoEtherInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<HasNoEtherInstance>;
}

export interface InitializableContract
  extends Truffle.Contract<InitializableInstance> {
  "new"(
    _initializer: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<InitializableInstance>;
}

export interface MigrationsContract
  extends Truffle.Contract<MigrationsInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>;
}

export interface MockBLTContract extends Truffle.Contract<MockBLTInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MockBLTInstance>;
}

export interface OwnableContract extends Truffle.Contract<OwnableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<OwnableInstance>;
}

export interface PausableContract extends Truffle.Contract<PausableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<PausableInstance>;
}

export interface PollContract extends Truffle.Contract<PollInstance> {
  "new"(
    _name: string,
    _chainId: number | BigNumber | string,
    _ipfsHash: (string | BigNumber)[],
    _numChoices: number | BigNumber | string,
    _startTime: number | BigNumber | string,
    _endTime: number | BigNumber | string,
    _author: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<PollInstance>;
}

export interface SigningLogicContract
  extends Truffle.Contract<SigningLogicInstance> {
  "new"(
    name: string,
    version: string,
    chainId: number | BigNumber | string,
    meta?: Truffle.TransactionDetails
  ): Promise<SigningLogicInstance>;
}

export interface StandardTokenContract
  extends Truffle.Contract<StandardTokenInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<StandardTokenInstance>;
}

export interface TokenEscrowMarketplaceContract
  extends Truffle.Contract<TokenEscrowMarketplaceInstance> {
  "new"(
    _token: string | BigNumber,
    _attestationLogic: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<TokenEscrowMarketplaceInstance>;
}

export interface VotingCenterContract
  extends Truffle.Contract<VotingCenterInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<VotingCenterInstance>;
}

export interface AccountRegistryLogicInstance extends Truffle.ContractInstance {
  linkIds(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  usedSignatures(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  endInitialization(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  linkAddresses(
    _currentAddress: string | BigNumber,
    _currentAddressSig: (string | BigNumber)[],
    _newAddress: string | BigNumber,
    _newAddressSig: (string | BigNumber)[],
    _nonce: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  unlinkAddress(
    _addressToRemove: string | BigNumber,
    _nonce: string | BigNumber,
    _unlinkSignature: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  migrateLink(
    _currentAddress: string | BigNumber,
    _newAddress: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  initializing(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  initializer(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface AccreditationRepoInstance extends Truffle.ContractInstance {
  accreditations(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  grantAccreditation(
    _attester: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  revokeAccreditation(
    _attester: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setAdmin(
    _newAdmin: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
  admin(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface AirdropProxyInstance extends Truffle.ContractInstance {
  isManager(
    _address: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  unpause(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  pause(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  reclaimEther(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferOwnership(
    newOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  addManager(
    _manager: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  removeManager(
    _oldManager: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  airdrop(
    _to: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  withdrawAllTokens(
    _to: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  paused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
  token(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface AttestationLogicInstance extends Truffle.ContractInstance {
  usedSignatures(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  endInitialization(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  attest(
    _subject: string | BigNumber,
    _requester: string | BigNumber,
    _reward: number | BigNumber | string,
    _requesterSig: (string | BigNumber)[],
    _dataHash: string | BigNumber,
    _requestNonce: string | BigNumber,
    _subjectSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  attestFor(
    _subject: string | BigNumber,
    _attester: string | BigNumber,
    _requester: string | BigNumber,
    _reward: number | BigNumber | string,
    _requesterSig: (string | BigNumber)[],
    _dataHash: string | BigNumber,
    _requestNonce: string | BigNumber,
    _subjectSig: (string | BigNumber)[],
    _delegationSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  contest(
    _requester: string | BigNumber,
    _reward: number | BigNumber | string,
    _requestNonce: string | BigNumber,
    _requesterSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  contestFor(
    _attester: string | BigNumber,
    _requester: string | BigNumber,
    _reward: number | BigNumber | string,
    _requestNonce: string | BigNumber,
    _requesterSig: (string | BigNumber)[],
    _delegationSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  migrateAttestation(
    _requester: string | BigNumber,
    _attester: string | BigNumber,
    _subject: string | BigNumber,
    _dataHash: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  revokeAttestation(
    _link: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  revokeAttestationFor(
    _sender: string | BigNumber,
    _link: string | BigNumber,
    _nonce: string | BigNumber,
    _delegationSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setTokenEscrowMarketplace(
    _newTokenEscrowMarketplace: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  initializing(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  tokenEscrowMarketplace(
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;
  initializer(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface BasicTokenInstance extends Truffle.ContractInstance {
  balanceOf(
    _owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer(
    _to: string | BigNumber,
    _value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface BatchInitializerInstance extends Truffle.ContractInstance {
  transferOwnership(
    newOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setAdmin(
    _newAdmin: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setRegistryLogic(
    _newRegistryLogic: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setAttestationLogic(
    _newAttestationLogic: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  setTokenEscrowMarketplace(
    _newMarketplace: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  endInitialization(
    _initializable: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  batchLinkAddresses(
    _currentAddresses: (string | BigNumber)[],
    _newAddresses: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  batchMigrateAttestations(
    _requesters: (string | BigNumber)[],
    _attesters: (string | BigNumber)[],
    _subjects: (string | BigNumber)[],
    _dataHashes: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  attestationLogic(txDetails?: Truffle.TransactionDetails): Promise<string>;
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
  registryLogic(txDetails?: Truffle.TransactionDetails): Promise<string>;
  admin(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface ConvertLibInstance extends Truffle.ContractInstance {
  convert(
    amount: number | BigNumber | string,
    conversionRate: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;
}

export interface ECRecoveryInstance extends Truffle.ContractInstance {
  recover(
    hash: string | BigNumber,
    sig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;
}

export interface ERC20Instance extends Truffle.ContractInstance {
  balanceOf(
    who: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface ERC20BasicInstance extends Truffle.ContractInstance {
  balanceOf(
    who: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface HasNoEtherInstance extends Truffle.ContractInstance {
  transferOwnership(
    newOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  reclaimEther(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface InitializableInstance extends Truffle.ContractInstance {
  endInitialization(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  initializing(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  initializer(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface MigrationsInstance extends Truffle.ContractInstance {
  setCompleted(
    completed: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  upgrade(
    new_address: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  last_completed_migration(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface MockBLTInstance extends Truffle.ContractInstance {
  balanceOf(
    _owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  allowance(
    _owner: string | BigNumber,
    _spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    _spender: string | BigNumber,
    _value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    _from: string | BigNumber,
    _to: string | BigNumber,
    _value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  decreaseApproval(
    _spender: string | BigNumber,
    _subtractedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transfer(
    _to: string | BigNumber,
    _value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseApproval(
    _spender: string | BigNumber,
    _addedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  gift(
    _recipient: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface OwnableInstance extends Truffle.ContractInstance {
  transferOwnership(
    newOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface PausableInstance extends Truffle.ContractInstance {
  transferOwnership(
    newOwner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  pause(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  unpause(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  paused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface PollInstance extends Truffle.ContractInstance {
  usedSignatures(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  vote(
    _choice: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  voteFor(
    _choice: number | BigNumber | string,
    _voter: string | BigNumber,
    _nonce: string | BigNumber,
    _delegationSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  endTime(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
  startTime(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
  pollDataMultihash(
    txDetails?: Truffle.TransactionDetails
  ): Promise<(string)[]>;
  author(txDetails?: Truffle.TransactionDetails): Promise<string>;
  numChoices(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface SigningLogicInstance extends Truffle.ContractInstance {
  usedSignatures(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;
}

export interface StandardTokenInstance extends Truffle.ContractInstance {
  balanceOf(
    _owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  allowance(
    _owner: string | BigNumber,
    _spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer(
    _to: string | BigNumber,
    _value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    _from: string | BigNumber,
    _to: string | BigNumber,
    _value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  approve(
    _spender: string | BigNumber,
    _value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseApproval(
    _spender: string | BigNumber,
    _addedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  decreaseApproval(
    _spender: string | BigNumber,
    _subtractedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface TokenEscrowMarketplaceInstance
  extends Truffle.ContractInstance {
  tokenEscrow(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  usedSignatures(
    arg0: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  moveTokensToEscrowLockupFor(
    _sender: string | BigNumber,
    _amount: number | BigNumber | string,
    _nonce: string | BigNumber,
    _delegationSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  moveTokensToEscrowLockup(
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  releaseTokensFromEscrowFor(
    _sender: string | BigNumber,
    _amount: number | BigNumber | string,
    _nonce: string | BigNumber,
    _delegationSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  releaseTokensFromEscrow(
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  requestTokenPayment(
    _payer: string | BigNumber,
    _receiver: string | BigNumber,
    _amount: number | BigNumber | string,
    _nonce: string | BigNumber,
    _paymentSig: (string | BigNumber)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  attestationLogic(txDetails?: Truffle.TransactionDetails): Promise<string>;
  token(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface VotingCenterInstance extends Truffle.ContractInstance {
  polls(
    arg0: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  createPoll(
    _name: string,
    _chainId: number | BigNumber | string,
    _ipfsHash: (string | BigNumber)[],
    _numOptions: number | BigNumber | string,
    _startTime: number | BigNumber | string,
    _endTime: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  allPolls(txDetails?: Truffle.TransactionDetails): Promise<(string)[]>;
  numPolls(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}
